#### Prerequisites
Node.js: >= v18.17.1\
Go: >= Go v1.21.0

#### Install buf
```
go install buf.build/buf/cmd/buf@latest
```

#### Install plugins for Go
```
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

#### Install plugins for Node
```
npm install -g @bufbuild/protoc-gen-es
npm install -g @connectrpc/protoc-gen-connect-es
```

#### Generate protobuf
```
buf generate
```
