// @generated by protoc-gen-connect-es v1.1.0 with parameter "target=ts,import_extension=.ts"
// @generated from file product/v1/product.proto (package product.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateProductRequest, CreateProductResponse } from "./product_pb.ts";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service product.v1.ProductService
 */
export const ProductService = {
  typeName: "product.v1.ProductService",
  methods: {
    /**
     * @generated from rpc product.v1.ProductService.CreateProduct
     */
    createProduct: {
      name: "CreateProduct",
      I: CreateProductRequest,
      O: CreateProductResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

