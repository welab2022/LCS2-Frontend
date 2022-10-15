package routes

import (
	"github.com/gorilla/mux"
	h "github.com/jferrinho1/gophr-mock-api2/handlers"
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
