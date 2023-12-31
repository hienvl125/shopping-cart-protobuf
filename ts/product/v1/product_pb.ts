// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file product/v1/product.proto (package product.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message product.v1.Product
 */
export class Product extends Message<Product> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string desc = 3;
   */
  desc = "";

  /**
   * @generated from field: int64 price = 4;
   */
  price = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<Product>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "product.v1.Product";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "price", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Product {
    return new Product().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Product {
    return new Product().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Product {
    return new Product().fromJsonString(jsonString, options);
  }

  static equals(a: Product | PlainMessage<Product> | undefined, b: Product | PlainMessage<Product> | undefined): boolean {
    return proto3.util.equals(Product, a, b);
  }
}

/**
 * @generated from message product.v1.CreateProductRequest
 */
export class CreateProductRequest extends Message<CreateProductRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string desc = 2;
   */
  desc = "";

  /**
   * @generated from field: int64 price = 3;
   */
  price = protoInt64.zero;

  constructor(data?: PartialMessage<CreateProductRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "product.v1.CreateProductRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "desc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "price", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProductRequest {
    return new CreateProductRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProductRequest {
    return new CreateProductRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProductRequest {
    return new CreateProductRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateProductRequest | PlainMessage<CreateProductRequest> | undefined, b: CreateProductRequest | PlainMessage<CreateProductRequest> | undefined): boolean {
    return proto3.util.equals(CreateProductRequest, a, b);
  }
}

/**
 * @generated from message product.v1.CreateProductResponse
 */
export class CreateProductResponse extends Message<CreateProductResponse> {
  /**
   * @generated from field: product.v1.Product product = 1;
   */
  product?: Product;

  constructor(data?: PartialMessage<CreateProductResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "product.v1.CreateProductResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "product", kind: "message", T: Product },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateProductResponse {
    return new CreateProductResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateProductResponse {
    return new CreateProductResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateProductResponse {
    return new CreateProductResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateProductResponse | PlainMessage<CreateProductResponse> | undefined, b: CreateProductResponse | PlainMessage<CreateProductResponse> | undefined): boolean {
    return proto3.util.equals(CreateProductResponse, a, b);
  }
}

