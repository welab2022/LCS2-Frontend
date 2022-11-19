import { useMutation } from "@tanstack/react-query";
import { Button, Dropdown, Input, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { uploadAvatarMutation } from "../../../api/uploadAvatar";

export default function ModalEditInfo({
  openNotificationWithIcon,
  getAvatar,
  openModal,
  setOpenModal,
  resultAvatar,
  data,
  setOpenModalChangePassword,
}) {
  const { mutateAsync: handleUploadApi } = useMutation(uploadAvatarMutation);

  const itemDropdownUpload = (
    <div className="bg-gray-300">
      <label
        className="cursor-pointer"
        onChange={(e) => handleUpload(e)}
        htmlFor="file-upload"
      >
        Change Photo
        <input name="" type="file" accept="image/*" id="file-upload" hidden />
      </label>
    </div>
  );
  //function
  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e?.target?.files[0]);
    await handleUploadApi({ formData }).then(
      (result) =>
        result &&
        openNotificationWithIcon({
          type: "success",
          description: "Upload avatar successfully!",
        })
    );
    await getAvatar();
  };
  return (
    <Modal
      title="Edit your profile"
      open={openModal}
      onCancel={() => setOpenModal(false)}
      footer={() => <></>}
    >
      <div className="px-4">
        <div className="flex items-center">
          <div>
            <p className="font-semibold">Upload avatar</p>
            <div className="flex items-center">
              <Dropdown overlay={itemDropdownUpload} placement="topRight">
                <div>
                  {resultAvatar?.data?.Base64 ? (
                    <img
                      className="w-[100px] h-[100px] object-cover"
                      src={resultAvatar?.data?.Base64}
                      alt="avatar"
                    />
                  ) : (
                    <div className="w-[100px] h-[100px] flex justify-center items-center bg-gray-300">
                      <PlusOutlined className="mr-1" /> Upload
                    </div>
                  )}
                </div>
              </Dropdown>
              <p className="ml-[30px]">{data?.data?.email}</p>
            </div>
          </div>
        </div>
        <p className="border-t-[1px] border-gray-200 mt-[10px]">About you</p>
        <div className="mt-2">
          <p className="font-semibold">Full name</p>
          <div className="flex ">
            <Input
              style={{ width: 250 }}
              placeholder="Full name"
              value={data?.data?.first_name + " " + data?.data?.last_name}
            />
            <Button className="ml-[50px]">Save</Button>
          </div>
        </div>
        <div className="mb-4 flex items-center mt-4">
          <p className="font-semibold p-0 m-0 mr-8 ">Password</p>
          <Button
            className="ml-[50px]"
            onClick={() => setOpenModalChangePassword(true)}
          >
            Change Password
          </Button>
        </div>
        <p>Last login: {data?.data?.last_login?.split("T")[0]}</p>
        <p>
          Password changed at: {data?.data?.password_changed_at?.split("T")[0]}
        </p>
      </div>
    </Modal>
  );
}
