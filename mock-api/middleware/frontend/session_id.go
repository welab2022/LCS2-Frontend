package middleware

import (
	"net/http"
	// h "github.com/welab2022/LCS2-Frontend/mock-api/handlers"
)

func RequireSessionIdHeader(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// sessionId := r.Header.Get("SESSION-ID")

		// log.Printf("Middleware: Session ID: %s\n", sessionId)

		// if sessionId != "" {
		// 	next.ServeHTTP(w, r)
		// } else {
		// 	// Write an error and stop the handler chain
		// 	handler := h.DummyHandler{
		// 		FilePath: "./schemas/frontend/session_id_error.json",
		// 		Status:   401,
		// 	}

		// 	handler.ServeHTTP(w, r)
		// }

		next.ServeHTTP(w, r)
	})
}
