package middleware

import (
	"net/http"
	// h "github.com/welab2022/LCS2-Frontend/mock-api/handlers"
)

func RequireFrontendVersionHeader(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// version := r.Header.Get("FRONTEND-VERSION")

		// log.Printf("Middleware: Frontend version: %s\n", version)
		// if version == "2.0.20200626.1.5" {
		// 	next.ServeHTTP(w, r)
		// } else {
		// 	// Write an error and stop the handler chain
		// 	handler := h.DummyHandler{
		// 		FilePath: "./schemas/frontend/frontend_version_error.json",
		// 		Status:   422,
		// 	}

		// 	handler.ServeHTTP(w, r)
		// }
		next.ServeHTTP(w, r)
	})
}
