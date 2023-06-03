import React, { useEffect, useRef } from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import useAuth from 'app/hooks/useAuth';
import { Box } from "@mui/material";

const Messages = ({ messages }) => {

  const AlwaysScrollToBottom = () => {
	const elementRef = useRef();

	useEffect(() => elementRef.current.scrollIntoView());
	  return <div ref={elementRef} />;
  };

  
  const { logout, user } = useAuth();

  return (
	<Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
  	{/* {messages.map((item, index) => {
    	if (item.from === "me") {
      	return (
        	<Flex key={index} w="100%" justify="flex-end">
          	<Flex
            	bg="black"
            	color="white"
            	// minW="100px"
            	// maxW="350px"
            	my="1"
            	p="3"
          	>
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	} else {
      	return (
        	<Flex key={index} w="100%">
          	<Avatar
            	name="Computer"
            	src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
            	bg="blue.300"
          	></Avatar>
          	<Flex
            	bg="gray.100"
            	color="black"
            	minW="100px"
            	maxW="350px"
            	my="1"
            	p="3"
          	>
            	<Text>{item.text}</Text>
          	</Flex>
        	</Flex>
      	);
    	}
  	})} */}
    {messages.map((item, index) => {
      if (item.from === "me") {
        return (
        	// <Flex key={index}  justify="flex-start" >
          //   <Avatar src={user.avatar} sx={{ borderRadius: "5px%"}}/>
          // 	<Flex
          //   	bg="black"
          //   	color="white"
          //   	minW="100px"
          //   	maxW="350px"
          //   	my="1"
          //   	p="3"
          // 	>
          //   	<Text>{item.text}</Text>
          // 	</Flex>
        	// </Flex>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap : 3}}>
            <Box sx={{ width: "50px"}}>
              <Avatar src={user.avatar} sx={{ borderRadius: "5px"}}/>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
              {item.text}
            </Box>
          </Box>
      	);
      } else {
        return (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3}}>
            <Box sx={{ width: '50px'}}>
              {/* <Avatar src={user.avatar} sx={{ borderRadius: "5px"}}/> */}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
              {item.text}
            </Box>
          </Box>
        );
      }
    })}
  	<AlwaysScrollToBottom />
	</Flex>
  );
};

export default Messages;