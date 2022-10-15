package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"

	h "github.com/welab2022/LCS2-Frontend/mock-api/handlers"
	m "github.com/welab2022/LCS2-Frontend/mock-api/middleware"
	r "github.com/welab2022/LCS2-Frontend/mock-api/routes"
)

func main() {

	mux := mux.NewRouter()

	r.RegisterErrorRoutes(mux)
	registerOptionsRoute(mux)
	registerFrontendRoutes(mux)
	registerMobileRoutes(mux)

	// Heroku gets port to bind on from $PORT env value
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000" // Default port if not specified
	}

	log.Println("Mock API server starting on " + port + "...\n")

	err := http.ListenAndServe(":"+port, mux)
	if err != nil {
		log.Panic(err)
	}
}

func registerFrontendRoutes(mux *mux.Router) {
	subRouter := mux.PathPrefix("/frontend").Subrouter()

	r.RegisterFrontendRoutes(subRouter)
	m.RegisterFrontendMiddleware(subRouter)
}

func registerMobileRoutes(mux *mux.Router) {
	subRouter := mux.PathPrefix("/mobile").Subrouter()

	r.RegisterMobileRoutes(subRouter)
	m.RegisterMobileMiddleware(subRouter)
}

func registerOptionsRoute(mux *mux.Router) {
	mux.Use(m.AddCorsHeaders)
	mux.PathPrefix("/").Handler(&h.DummyHandler{Status: 200}).Methods(http.MethodOptions)
}
