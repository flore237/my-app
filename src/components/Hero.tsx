import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Box,
    Container,
    Center,
    Avatar,
    AvatarGroup,
    IconProps,
    Icon,
} from '@chakra-ui/react';
import { Show, Hide } from '@chakra-ui/react';

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

export default function WithBackgroundImage() {
    return (
        <Flex 
            // width={{ base: '100px', sm: '100%', md: '100%' }}
            width={{ base: '1000px', sm: '100px', md: '100px' }}
            h={'100vh'}
            backgroundImage={
                'url(https://stagemalta.org/wp-content/uploads/2019/10/15547.jpg)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
                position="relative">
                
                
                <Stack maxW={'2xl'} position="relative" left='5' spacing={6}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        color={'blue.400'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '100sm', md: '100sm' })}>
                      Discovery your journey
          </Text>
                    <Text
                         textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                        fontFamily={'serif'}>
                        Discover 4500+ Courses<br />from top Instructor<br /> Around the World
          </Text>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        color={'gray.700'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '100sm', md: '100sm' })}>
                        Take your learning organization to the next level.Who will <br />share their knoledge to people around the world
          </Text>
          
                    <Stack position='relative' direction={'row'} display={{ base: 'center', md: 'center' } }ml={['120px','90px','80px']}>
                        <Center>
                        <Button
                
                            bg={'blue.400'}
                           px={'30'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}
                           
                            >
                            View all courses
                            
            </Button>
</Center>
                    </Stack>
                </Stack>
            </VStack>

            {/* //composant Top Rated    */}

            <Hide below='lg'>
            
            <Container position={'relative'}
                maxW={'sm'}
                py={{ base: 10, sm: 20, lg: 50 }}
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}>

                <Stack
                        position={'relative'}
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    mt={'60'}
                    width={'150px'}
                    height={'140px'}
                    maxW={{ lg: 'md' }}
                        left='30px'
                        top={'130'}
                    >
                    <Center>

                        <Stack direction={'row'} spacing={4} align={'center'} left='30px'>
                            <Avatar
                                size={'lg'}
                                src={
                                    'https://images.squarespace-cdn.com/content/v1/5edaae2030bfe75bcae4635e/1621274680695-CILCQNQGOEOTKKU6D68E/Artboard+4+copy+9%403xw.png'
                                }
                                alt={'Avatar Alt'}
                                mb={4}
                                pos={'relative'}
                                top={"-30px"}
                                boxShadow='xl'
                                zIndex={2}
                                max={4}

                            />
                        </Stack>
                    </Center>
                    <Center>
                        <Stack position="relative" top={"-40px"} >
                            <Text color={'gray.500'} fontSize='md'
                                lineHeight='normal'
                                fontWeight='semibold'>
                                Top Rated <br />Instructor
            </Text>
                        </Stack>
                    </Center>
                </Stack>
            </Container>
            </Hide>
            
    {/* composants avec plusieurs avatars */}

            <Hide below='lg'>
                
            
            <Container position={'relative'}
                maxW={'sm'}
                py={{ base: 10, sm: 20, lg: 50 }}
                    top={'15'}>
               

                <Stack
                        position={'relative'}
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    mt={'60'}
                    width={'200px'}
                    height={'100px'}
                    maxW={{ lg: 'md' }}
                    top={'-100px'}
                    left='150px'
                    >

                    <Box direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    boxShadow='xl'
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={useBreakpointValue({ base: 'sm', md: 'sm' })}
                                    position={'relative'}
                                    zIndex={2}
                                    max={4}
                                    top={"-50px"}

                                />
                            ))}
                        </AvatarGroup>

                    </Box>
                    <Stack position="relative" top={"-50px"}>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            More than <Box as='span' color ='blue'>21,500+</Box> students around the world
            </Text>
                    </Stack>
                </Stack>
            </Container>
</Hide>
        </Flex>
    );
}