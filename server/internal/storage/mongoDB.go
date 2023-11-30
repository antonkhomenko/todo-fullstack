package storage

import (
	"context"
	"github.com/antonkhomenko/todo-fullstack/internal/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"os"
)

type MongoDB struct {
	c *mongo.Collection
}

func NewMongoDB(client *mongo.Client) *MongoDB {
	return &MongoDB{
		c: client.Database(os.Getenv("DB_NAME")).Collection("users"),
	}
}

func (mongo *MongoDB) Get(loginForm models.Login) (*models.User, error) {
	var user models.User
	userMongo := mongo.c.FindOne(context.TODO(), bson.D{{"email", loginForm.Email}, {"password", loginForm.Password}})
	if err := userMongo.Decode(&user); err != nil {
		return &models.User{}, err
	}
	return &user, nil
}
