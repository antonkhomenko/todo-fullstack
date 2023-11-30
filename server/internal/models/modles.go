package models

import "mime/multipart"

type Login struct {
	Email    string `form:"email"`
	Password string `form:"password"`
}

type Registration struct {
	Name       string                `form:"name"`
	Email      string                `form:"email"`
	Password   string                `form:"password"`
	ProfilePic *multipart.FileHeader `form:"profilePic"`
}

type User struct {
	Name       string
	Email      string
	ProfilePic *multipart.FileHeader
}
