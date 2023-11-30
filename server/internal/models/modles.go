package models

type Login struct {
	Email    string `form:"email"`
	Password string `form:"password"`
}

type User struct {
	Name  string
	Email string
	//Password   string
	ProfilePic string
}
