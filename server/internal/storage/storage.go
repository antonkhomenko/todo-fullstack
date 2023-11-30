package storage

import "github.com/antonkhomenko/todo-fullstack/internal/models"

type Storage interface {
	Get(loginForm models.Login) (*models.User, error)
}
