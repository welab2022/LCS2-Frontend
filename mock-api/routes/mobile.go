package routes

import (
	"github.com/gorilla/mux"
	h "github.com/welab2022/LCS2-Frontend/mock-api/handlers"
)

func RegisterMobileRoutes(mux *mux.Router) {
	mux.Handle(
		"/api/test",
		&h.DummyHandler{
			FilePath: "./schemas/test.json",
			Status:   201,
		},
	).Methods("GET")
}
