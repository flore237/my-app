import {Flex,Box, Icon, SimpleGrid} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from './Header';
import SearchBar from "./SearchBar";
import Hero from './Hero';
import Image from 'next/image'

const Blog =() =>{
    return(
        <div>
            {/* <Image 
                src='data:image/jpeg;base64,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'
            layout="fill"
            objectFit="cover"
            /> */}
           <Header/>
            {/* <SearchBar/> */}
             <Hero/>
            {/* <SimpleGrid
                columns={{ sm: 1, md: 1 }}
                p={3}
                textAlign={"right"} mb={-50}
            >  */}
                    {/* <Box >
                        <Icon  as={ FaInstagram}  h={8} w={30}/>
                    </Box>
                    <Box>
                        <Icon  as={FaLinkedin} h={8} w={30}/>
                    </Box> */}
                    {/*<Box>*/}
                        {/*<Icon  as={ FaInstagram} h={8} w={30}/>*/}
                    {/*</Box>*/}
            {/* </SimpleGrid> */}
        </div>
    )
}

export default Blog;