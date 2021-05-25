import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/PrimaryButton";
import { SecondaryButton } from "./components/atoms/SecondaryButton";
import { SerchInput } from "./components/molecules/SerchInput";
import { UserCard } from "./components/organism/user/userCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

const user = {
  name: "wanko",
  image:
    "https://images.unsplash.com/photo-1597674078451-cdb78f43674f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  email: "11sample@.com",
  phone: "090-7777-8888",
  company: {
    name: "てすと子会社"
  },
  website: "google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>テスト</SecondaryButton>
        <br />
        <SerchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
