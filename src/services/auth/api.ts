import { apiResolver } from "../../utils/api";
import axios from "../axios";
<<<<<<< Updated upstream
import { Response, SignInDTO } from "./types";

type token = string;

export function signUp() {}

export function signIn(payload: SignInDTO) {
  return apiResolver<Response<token>>(() =>
    axios.post("/auth/signin", payload)
  );
}
=======
import { Response, SignInDTO, SignUpDTO } from "./types";

type token = string;
>>>>>>> Stashed changes

export function signUp(payload: SignUpDTO) {
  return apiResolver<Response<token>>(() =>
    axios.post("/auth/signup", payload)
  );
}

export function signIn(payload: SignInDTO) {
  return apiResolver<Response<token>>(() =>
    axios.post("/auth/signin", payload)
  );
}

export function authorize() {
  return apiResolver<Response<token>>(() => axios.post("/auth/authorize"));
}
