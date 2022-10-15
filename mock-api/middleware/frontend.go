package middleware

import (
	"github.com/gorilla/mux"
	m "github.com/welab2022/LCS2-Frontend/mock-api/middleware/frontend"
)

func RegisterFrontendMiddleware(mux *mux.Router) {
	mux.Use(m.RequireFrontendVersionHeader)
	mux.Use(m.RequireSessionIdHeader)
}
