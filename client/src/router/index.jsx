import { useRoutes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage/index";
import AboutUs from "../pages/Account/index";
import TopLayout from "../layouts/TopMenu";
import Footer from "./../components/footer/index";
import Sign_Up from "../pages/SignUp/index";
import Sign_In from "../pages/SignIn/index";
import Donation from "../pages/DonationPage/index";
import AddDonation from "../pages/AddDonation/index";
import NeedDonation from "../pages/NeedDonations/index";
import AddNeedDonation from "../pages/AddNeedDonations/index";
import ViewPage from "../pages/ViewPage/index";
import Account from "../pages/Account/index";

function Router() {
  const routes = [
    {
      path: "",
      element: (
        <TopLayout footer>
          <HomePage />
        </TopLayout>
      ),
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/sign-up",
      element: <Sign_Up />,
    },
    {
      path: "/sign-in",
      element: <Sign_In />,
    },
    {
      path: "/donation",
      element: (
        <TopLayout footer>
          <Donation />
        </TopLayout>
      ),
    },
    {
      path: "/add-donation",
      element: (
        <TopLayout footer>
          <AddDonation />
        </TopLayout>
      ),
    },
    {
      path: "/need-donation",
      element: (
        <TopLayout footer>
          <NeedDonation />
        </TopLayout>
      ),
    },
    {
      path: "/need-add-donation",
      element: (
        <TopLayout footer>
          <AddNeedDonation />
        </TopLayout>
      ),
    },
    {
        path: "/view/:id",
        element: (
          <TopLayout footer>
            <ViewPage />
          </TopLayout>
        ),
      },
      {
        path: "/account",
        element: (
          <TopLayout footer>
            <Account />
          </TopLayout>
        ),
      },
  ];

  return useRoutes(routes);
}

export default Router;
