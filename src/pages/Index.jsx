import { Box, Flex, Text, Input, VStack, HStack, Button, useColorMode, useColorModeValue, IconButton, SimpleGrid, Heading, FormControl, InputGroup, InputRightElement, Image, useToast, Spacer, Divider, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaHeart, FaSync } from "react-icons/fa";
import { useState, useEffect } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [cookieConsent, setCookieConsent] = useState(true);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const headerBgColor = useColorModeValue("gray.800", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchTrendingPosts();
  }, []);

  const fetchTrendingPosts = async () => {
    // This is a placeholder for the actual HackerNews API call
    const dummyPosts = new Array(9).fill(null).map((_, index) => ({
      id: index,
      title: `Post ${index + 1}`,
      image: `https://images.unsplash.com/photo-1587837073080-448bc6a2329b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwb3IlMjBzcGFjZXxlbnwwfHx8fDE3MDkwNjQ0OTd8MA&ixlib=rb-4.0.3&q=80&w=1080`,
      publishDate: `2023-01-${index + 1}`,
      category: "Technology",
      likes: Math.floor(Math.random() * 100),
    }));
    setPosts(dummyPosts);
  };

  const toggleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const handleSubmitEmail = () => {
    setEmailSubmitted(true);
    toast({
      title: "Success!",
      description: "You've been subscribed to SheldonNews.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <VStack spacing={8}>
        {/* Header */}
        <Box w="full" bg={headerBgColor} color={textColor} py={4} px={8}>
          <Flex justify="space-between" align="center">
            <Heading size="md">SheldonNews</Heading>
            <HStack spacing={4}>
              <IconButton icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} variant="ghost" colorScheme="whiteAlpha" />
              <IconButton icon={<FaSync />} onClick={fetchTrendingPosts} variant="ghost" colorScheme="whiteAlpha" />
            </HStack>
          </Flex>
          <Divider my={1} bg="linear-gradient(to right, #ff0080, #ff8c00, #ff0080, #ff8c00, #ff0080, #ff8c00)" h="2px" />
          <Text textAlign="center" py={2}>
            Discover the future of technology today and be part of the conversation that shapes our tomorrow.
          </Text>
        </Box>

        {/* Teaser */}
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Stay ahead of the curve with the latest tech buzz!⚡
        </Text>

        {/* Search Field */}
        <FormControl maxW="60%" w="full">
          <InputGroup>
            <Input placeholder="Search for posts..." bg={bgColor} />
            <InputRightElement>
              <IconButton icon={<FaSearch />} variant="ghost" colorScheme="whiteAlpha" />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* Post List */}
        <SimpleGrid columns={[1, null, 3]} spacing={8} w="full">
          {posts.map((post) => (
            <VStack key={post.id} bg={bgColor} shadow="md" p={4} borderRadius="md" borderWidth={1} borderColor={borderColor} align="stretch">
              <Image src={post.image} borderRadius="md" />
              <Text fontWeight="bold">{post.title}</Text>
              <Text fontSize="sm">
                {post.publishDate} · {post.category}
              </Text>
              <Button leftIcon={<FaHeart />} variant="ghost" colorScheme="red" onClick={() => toggleLike(post.id)}>
                {likes[post.id] ? post.likes + 1 : post.likes}
              </Button>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Email Optin */}
        {emailSubmitted ? (
          <Text color="white" bg="#005ce6" w="full" textAlign="center" py={2}>
            Thank you for subscribing! ✨
          </Text>
        ) : (
          <HStack bg="#005ce6" color="white" w="full" py={4} px={8} spacing={4}>
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold">Join our Newsletter 🌟</Text>
              <Text>Get the latest news directly to your inbox!</Text>
            </VStack>
            <Spacer />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <Button onClick={handleSubmitEmail}>Sign Up</Button>
          </HStack>
        )}

        {/* Footer */}
        <Box w="full" bg={headerBgColor} color={textColor} py={4} px={8}>
          <Text>Created by 🤖 and proud of it!</Text>
          <Text>© {currentYear} Spectactulr News. All rights reserved.</Text>
        </Box>

        {/* Cookie Consent */}
        {cookieConsent && (
          <Flex position="fixed" bottom={0} left={0} right={0} p={4} bg="#005ce6" color="white" justifyContent="space-between" alignItems="center">
            <Text>This website uses cookies to ensure you get the best experience.</Text>
            <Button onClick={() => setCookieConsent(false)}>Got it!</Button>
          </Flex>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
