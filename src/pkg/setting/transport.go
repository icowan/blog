package setting

import (
	"context"
	"encoding/json"
	"github.com/go-kit/kit/endpoint"
	"github.com/go-kit/kit/log"
	kithttp "github.com/go-kit/kit/transport/http"
	"github.com/gorilla/mux"
	"github.com/icowan/shalog/src/encode"
	"github.com/icowan/shalog/src/middleware"
	"github.com/icowan/shalog/src/repository"
	"github.com/pkg/errors"
	"net/http"
)

var errBadRoute = errors.New("bad route")

func MakeHTTPHandler(s Service, logger log.Logger) http.Handler {
	opts := []kithttp.ServerOption{
		kithttp.ServerErrorLogger(logger),
		kithttp.ServerErrorEncoder(encode.EncodeJsonError),
		kithttp.ServerBefore(kithttp.PopulateRequestContext),
	}

	ems := []endpoint.Middleware{
		middleware.LoginMiddleware(logger), // 0
	}

	eps := NewEndpoint(s, map[string][]endpoint.Middleware{
		"Get":         ems,
		"Post":        ems,
		"List":        ems,
		"Delete":      ems,
		"Put":         ems,
		"UploadImage": ems,
		"Update":      ems,
		"WechatMenu":  ems,
	})

	r := mux.NewRouter()

	r.Handle("/setting/wechat/menu", kithttp.NewServer(
		eps.WechatMenuEndpoint,
		kithttp.NopRequestDecoder,
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodPost)
	r.Handle("/setting/{key}", kithttp.NewServer(
		eps.GetEndpoint,
		decodeGetRequest,
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodGet)
	r.Handle("/setting/new", kithttp.NewServer(
		eps.PostEndpoint,
		decodePostRequest,
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodPost)
	r.Handle("/setting", kithttp.NewServer(
		eps.ListEndpoint,
		func(_ context.Context, r *http.Request) (request interface{}, err error) {
			return nil, nil
		},
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodGet)
	r.Handle("/setting", kithttp.NewServer(
		eps.UpdateEndpoint,
		func(_ context.Context, r *http.Request) (request interface{}, err error) {
			var req settingsRequest
			err = json.NewDecoder(r.Body).Decode(&req)
			return req, err
		},
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodPut)

	r.Handle("/setting/{key}", kithttp.NewServer(
		eps.PutEndpoint,
		decodePostRequest,
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodPut)

	r.Handle("/setting/{key}", kithttp.NewServer(
		eps.DeleteEndpoint,
		decodeGetRequest,
		encode.EncodeJsonResponse,
		opts...,
	)).Methods(http.MethodDelete)

	return r
}

func decodeGetRequest(_ context.Context, r *http.Request) (interface{}, error) {
	vars := mux.Vars(r)
	key, ok := vars["key"]
	if !ok {
		return nil, errBadRoute
	}

	req := settingRequest{
		Key: repository.SettingKey(key),
	}

	return req, nil
}

func decodePostRequest(_ context.Context, r *http.Request) (interface{}, error) {
	var req settingRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		return nil, errors.Wrap(err, ErrSettingReqParams.Error())
	}

	// todo: 一堆验证

	return req, nil
}
