package handlers

import (
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

type DummyHandler struct {
	FilePath string
	Status   int
}

func (h *DummyHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if h.Status == 0 {
		h.Status = http.StatusOK
	}

	log.Println("Method: ", r.Method)
	log.Println("RequestURI: ", r.RequestURI)

	w.WriteHeader(h.Status)

	if h.FilePath != "" {
		jsonFile, _ := os.Open(h.FilePath)
		json, _ := ioutil.ReadAll(jsonFile)
		w.Write(json)
	}
}
