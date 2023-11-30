package handlers

import (
	"fmt"
	"github.com/antonkhomenko/todo-fullstack/internal/models"
	"github.com/antonkhomenko/todo-fullstack/internal/storage"
	"github.com/gin-gonic/gin"
	"net/http"
)

type ErrorResponse struct {
	Message string
}

type Handler struct {
	storage storage.Storage
}

func NewHandler(s storage.Storage) *Handler {
	return &Handler{storage: s}
}

func (h *Handler) Registration(c *gin.Context) {
	var signUpForm models.Registration
	if err := c.Bind(&signUpForm); err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{err.Error()})
		return
	}
	err := h.storage.Insert(signUpForm)
	if err != nil {
		c.JSON(http.StatusBadRequest, ErrorResponse{err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("user %s successfully created\n", signUpForm.Name),
		"user":    models.User{Name: signUpForm.Name, Email: signUpForm.Email, ProfilePic: signUpForm.ProfilePic},
	})
}

func (h *Handler) Login(c *gin.Context) {
	var LoginForm models.Login
	if err := c.Bind(&LoginForm); err != nil {
		c.JSON(http.StatusInternalServerError, ErrorResponse{err.Error()})
		return
	}
	user, err := h.storage.Get(LoginForm)
	if err != nil {
		c.JSON(http.StatusUnauthorized, ErrorResponse{err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}
