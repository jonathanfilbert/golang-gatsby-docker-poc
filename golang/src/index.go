package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

type Message struct {
	Status int    `json:"status"`
	Data   string `json:"data"`
}

func GetRoot(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Access-Control-Allow-Origin", "*")
	res.Header().Set("Content-Type", "application/json")
	msg := Message{200, "All Work and No Play Makes Jack a Dull Boy"}
	data, _ := json.Marshal(msg)
	res.Write(data)
}

func main() {
	router := mux.NewRouter()
	fmt.Println("Listening on port 8080...")
	router.HandleFunc("/api/", GetRoot)
	http.ListenAndServe(":8080", router)
}
