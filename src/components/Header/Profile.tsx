import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?:boolean;
}

export function Profile ({showProfileData= true}:ProfileProps) {
    return(
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Alberto Consoli</Text>
                <Text color="gray.300" fontSize="small">3ddy.br@gmail.com</Text>
            </Box>
            
            )}
                <Avatar size="md" name="Alberto Consoli" src="https://github.com/3ddybr.png"/>        
        </Flex>
    );
}