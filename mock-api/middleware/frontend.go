package middleware

import (
	"github.com/gorilla/mux"
	m "github.com/jferrinho1/gophr-mock-api2/middleware/frontend"
)

func RegisterFrontendMiddleware(mux *mux.Router) {
	mux.Use(m.RequireFrontendVersionHeader)
	mux.Use(m.RequireSessionIdHeader)
}
