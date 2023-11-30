package storage

import "github.com/antonkhomenko/todo-fullstack/internal/models"

type Storage interface {
	Insert(registrationForm models.Registration) error
	Get(loginForm models.Login) (*models.User, error)
}
