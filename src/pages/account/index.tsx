import React from "react";
import Image from "next/image";
import Head from "next/head";

import Card from "@/components/card";
import Button from "@/components/Button";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PersonalInfoCard from "./PersonalInfoCard";
import SecurityCard from "./SecurityCard";

const MyAccountPage = () => {
  return (
    <>
      <Head>
        <title>My Account — Brydge</title>
        <meta name="description" content="My Account with Brydge.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-100">
        <div className={`container p-8 pt-16 h-full`}>
          <Card className="mb-8 p-4 flex justify-between">
            <div className="flex">
              <Image
                className="rounded-lg mr-4"
                src="https://picsum.photos/200"
                alt="profile"
                width={50}
                height={50}
              />
              <div>
                <div className="font-semibold text-lg">User</div>
                <div className="text-gray-500 text-sm font-medium">ronniepryde@gmail.com</div>
              </div>
            </div>
            <Button className="text-red-500 bg-red-200 !px-12 !py-2 rounded-lg font-medium" type="button">
              Logout
            </Button>
          </Card>
          <Card className="h-[400px] mb-4">
            <Tabs
              className="h-full"
              selectedTabClassName="border-none bottom-border"
              selectedTabPanelClassName="test"
            >
              <TabList>
                <Tab>Personal</Tab>
                <Tab>Company</Tab>
              </TabList>

              <TabPanel>
                <PersonalInfoCard />
              </TabPanel>
              <TabPanel>
                Company
              </TabPanel>
            </Tabs>
          </Card>
          <SecurityCard />
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;
