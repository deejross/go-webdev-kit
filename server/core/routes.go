package main

import (
	"go-webdev-kit/server/api/v1"

	"github.com/labstack/echo"
)

// SetRoutes sets up routes for the applications.
func SetRoutes(e *echo.Echo) {
	setStatic(e)
	setCoreRoutes(e)
	v1.SetAPIV1Routes(e)
}

func setStatic(e *echo.Echo) {
	// static paths are relative to webdev-kit/server/core
	e.File("/", "../../client/core/index.html")
	e.File("/favicon.ico", "../../public/favicon/favicon.ico")
	e.Static("/public", "../../public")
}

func setCoreRoutes(e *echo.Echo) {
	// TODO: finish
}
