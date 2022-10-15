package routes

import (
	"github.com/gorilla/mux"
	h "github.com/jferrinho1/gophr-mock-api2/handlers"
)

func RegisterFrontendRoutes(mux *mux.Router) {
	mux.Handle(
		"/api/test",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/test.json",
			Status:   201,
		},
	).Methods("GET")

	// workspace get endpoints
	mux.Handle(
		"/api/workspace-basic-info",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/workspace-basic-info.json",
			Status:   200,
		},
	).Methods("GET")

	mux.Handle(
		"/api/registration-info",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/registration-info.json",
			Status:   200,
		},
	).Methods("GET")

	mux.Handle(
		"/api/workspace-address",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/workspace-address.json",
			Status:   200,
		},
	).Methods("GET")

	mux.Handle(
		"/api/workspace-contacts",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/workspace-contacts.json",
			Status:   200,
		},
	).Methods("GET")

	// workspace post endpoints
	mux.Handle(
		"/api/workspace-basic-info",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	mux.Handle(
		"/api/registration-info",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	mux.Handle(
		"/api/workspace-address",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	mux.Handle(
		"/api/workspace-contacts",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	// billing get endpoints
	mux.Handle(
		"/api/billing-statement",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/billing-overview-statement.json",
			Status:   200,
		},
	).Methods("GET")

	// teams get endpoints
	mux.Handle(
		"/api/teams",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/teams.json",
			Status:   200,
		},
	).Methods("GET")

	mux.Handle(
		"/api/teams/details",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/teams-details.json",
			Status:   200,
		},
	).Methods("GET")

	mux.Handle(
		"/api/teams-edit",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/teams-edit.json",
			Status:   200,
		},
	).Methods("GET")

	/*
	   Description: Get all team members for a specific team
	   Method: GET
	*/
	mux.Handle(
		"/api/teams/members",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/teams-members.json",
			Status:   200,
		},
	).Methods("GET")

	mux.Handle(
		"/api/teams/member-details",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/teams-member-details.json",
			Status:   200,
		},
	).Methods("GET")

	// View team post endpoints
	mux.Handle(
		"/api/teams-edit",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	mux.Handle(
		"/api/teams-invite-members",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	mux.Handle(
		"/api/create-team",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/teams-edit.json",
			Status:   200,
		},
	).Methods("POST")

	mux.Handle(
		"/api/remove-team-member",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/standard-schema.json",
			Status:   200,
		},
	).Methods("POST")

	/*
		// LCS2 test data are defined here
	*/

	// login post endpoint (authenticated)
	mux.Handle(
		"/login",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/lcs2-response-authenticated.json",
			Status:   200,
		},
	).Methods("POST")

	// login post endpoint (unauthenticated)
	// mux.Handle(
	// 	"/login",
	// 	&h.DummyHandler{
	// 		FilePath: "./schemas/frontend/lcs2-response-unauthenticated.json",
	// 		Status:   401,
	// 	},
	// ).Methods("POST")

	// api key post endpoint (api-key)
	mux.Handle(
		"/api-key",
		&h.DummyHandler{
			FilePath: "./schemas/frontend/lcs2-response-api-key.json",
			Status:   200,
		},
	).Methods("POST")

}
