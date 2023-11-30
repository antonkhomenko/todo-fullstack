package handlers

import (
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
