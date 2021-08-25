import { CgPokemon } from "react-icons/cg";
import { useAuth } from "../../../hooks/auth";

import { Container } from "./styles";

export function LogoutButton() {
  const { signOut } = useAuth();

  return (
    <Container
      type="button"
      onClick={() => signOut()}
    >
      <CgPokemon color="#6e7fab" size={24} />
      Logout
    </Container>
  )
}