package routes

import (
	"github.com/gorilla/mux"
	h "github.com/jferrinho1/gophr-mock-api2/handlers"
)

func RegisterErrorRoutes(mux *mux.Router) {
	mux.Handle(
		"/api/error/401",
		&h.DummyHandler{Status: 401},
	)

	mux.Handle(
		"/api/error/404",
		&h.DummyHandler{Status: 404},
	)

	mux.Handle(
		"/api/error/422",
		&h.DummyHandler{Status: 422},
	)

	mux.Handle(
		"/api/error/500",
		&h.DummyHandler{Status: 500},
	)
}
