import { useMutation } from "@tanstack/react-query";
import React from "react";
import { changePasswordMutation } from "../../../api/uploadAvatar";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import useLocalStore from "../../../hook/useLocalStorage";

export default function ModalChangePassword({
  openModalChangePassword,
  setOpenModalChangePassword,
  openNotificationWithIcon,
}) {
  const { email } = useLocalStore();

  const [currentPass, setCurrentPass] = React.useState();
  const [newPass, setNewPass] = React.useState();
  const [confirmPass, setConfirmPass] = React.useState();
  const { data: resultChangePass, mutateAsync: handleChangePassword } =
    useMutation(changePasswordMutation);
  return (
    <Modal
      title="Change Your Password"
      open={openModalChangePassword}
      onCancel={() => setOpenModalChangePassword(false)}
      footer={() => <></>}
    >
      <div className="px-4">
        <div className="flex mb-4">
          <p className="w-[150px]">Current Password</p>
          <Input.Password
            style={{ width: 250 }}
            placeholder="Enter your current password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setCurrentPass(e.target.value)}
          />
        </div>
        <div className="flex mb-4">
          <p className="w-[150px]">New Password</p>
          <Input.Password
            style={{ width: 250 }}
            placeholder="Enter your new password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setNewPass(e.target.value)}
          />
        </div>
        <div className="flex mb-4">
          <p className="w-[150px]">Confirm New Password</p>
          <Input.Password
            style={{ width: 250 }}
            placeholder="Please confirm your new password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              if (!currentPass || !newPass || !confirmPass) {
                openNotificationWithIcon({
                  type: "warning",
                  description:
                    "You must enter all the fields current password, new password and confirm your new password to change password!",
                });
                return;
              }
              if (newPass !== confirmPass) {
                openNotificationWithIcon({
                  type: "warning",
                  description:
                    "Confirm password not match with your new password!",
                });
                return;
              }
              handleChangePassword({
                email: email,
                old_password: currentPass,
                new_password: newPass,
              });
              if (resultChangePass) {
                openNotificationWithIcon({
                  type: "success",
                  description: "You changed password successfully!",
                });
                setOpenModalChangePassword(false);
                return;
              }
              openNotificationWithIcon({
                type: "error",
                description: "You changed password failed!",
              });
            }}
          >
            Change Password
          </Button>
        </div>
      </div>
    </Modal>
  );
}
