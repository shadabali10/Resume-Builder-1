import React from 'react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function CenteredTabs() {

   

    return (
        <>
            <Tabs size='lg' variant='enclosed' w='50%' >
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
}