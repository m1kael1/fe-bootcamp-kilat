import { apiResolver } from "../../utils/api";
import axios from "../axios";
import { Response, SignInDTO } from "./types";

type token = string;

export function signUp() {}

export function signIn(payload: SignInDTO) {
  return apiResolver<Response<token>>(() =>
    axios.post("/auth/signin", payload)
  );
}

export function authorize() {}
