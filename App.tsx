/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import StylistProfile from './components/StylistProfile';
import StyleQuiz from './components/StyleQuiz';
import BookingScreen from './components/BookingScreen';
import {mockStylists, mockBlogPosts, mockMessages, Stylist} from './utils/mockData';

// Main App Component
function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('main');
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string> | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme configuration
  const theme = {
    dark: {
      background: '#000000',
      surface: '#1A1A1A',
      border: '#333333',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC',
      textTertiary: '#888888',
      accent: '#FFFFFF',
    },
    light: {
      background: '#FFFFFF',
      surface: '#F5F5F5',
      border: '#E0E0E0',
      text: '#000000',
      textSecondary: '#333333',
      textTertiary: '#666666',
      accent: '#000000',
    },
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleStylistPress = (stylist: Stylist) => {
    setSelectedStylist(stylist);
    setCurrentScreen('stylistProfile');
  };

  const handleBookPress = () => {
    setCurrentScreen('booking');
  };

  const handleMessagePress = () => {
    setCurrentScreen('messages');
    setActiveTab('messages');
  };

  const handleQuizComplete = (answers: Record<string, string>) => {
    setQuizAnswers(answers);
    setCurrentScreen('quizResults');
  };

  const handleBackToMain = () => {
    setCurrentScreen('main');
    setSelectedStylist(null);
    setQuizAnswers(null);
  };

  const handleBookingComplete = (bookingData: any) => {
    // Handle booking completion
    console.log('Booking completed:', bookingData);
    setCurrentScreen('main');
    setActiveTab('home');
  };

  const renderHomeScreen = () => (
    <View style={[styles.screen, { backgroundColor: currentTheme.background }]}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Stylo</Text>
          <Text style={[styles.headerSubtitle, { color: currentTheme.textSecondary }]}>Connect with Style Professionals</Text>
        </View>
        
        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
          <Text style={[styles.searchPlaceholder, { color: currentTheme.textTertiary }]}>Search stylists, styles, or events...</Text>
        </View>

        {/* Featured Content */}
        <View style={styles.featuredSection}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>Featured</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.featuredCard, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
              <Text style={[styles.featuredTitle, { color: currentTheme.text }]}>Style of the Week</Text>
              <Text style={[styles.featuredSubtitle, { color: currentTheme.textSecondary }]}>Business Casual Excellence</Text>
            </View>
            <View style={[styles.featuredCard, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
              <Text style={[styles.featuredTitle, { color: currentTheme.text }]}>Stylist of the Month</Text>
              <Text style={[styles.featuredSubtitle, { color: currentTheme.textSecondary }]}>Sarah Chen</Text>
            </View>
          </ScrollView>
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinksSection}>
          <Text style={[styles.sectionTitle, { color: currentTheme.text }]}>Quick Access</Text>
          <View style={styles.quickLinksGrid}>
            <TouchableOpacity 
              style={[styles.quickLink, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}
              onPress={() => setCurrentScreen('stylists')}
            >
              <Text style={[styles.quickLinkText, { color: currentTheme.text }]}>Find Stylist</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.quickLink, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}
              onPress={() => setCurrentScreen('quiz')}
            >
              <Text style={[styles.quickLinkText, { color: currentTheme.text }]}>Style Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.quickLink, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
              <Text style={[styles.quickLinkText, { color: currentTheme.text }]}>Book Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.quickLink, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}
              onPress={() => setActiveTab('blog')}
            >
              <Text style={[styles.quickLinkText, { color: currentTheme.text }]}>Latest Posts</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Theme Toggle Button */}
      <TouchableOpacity 
        style={[styles.themeToggle, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.themeToggleText, { color: currentTheme.text }]}>
          {isDarkMode ? '☀️' : '🌙'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderStylistsList = () => (
    <ScrollView style={[styles.screen, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToMain} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Find Stylists</Text>
        <View style={styles.headerSpacer} />
      </View>
      
      {mockStylists.map((stylist) => (
        <TouchableOpacity
          key={stylist.id}
          style={[styles.stylistCard, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}
          onPress={() => handleStylistPress(stylist)}
        >
          <View style={styles.stylistCardHeader}>
            <View style={[styles.stylistAvatar, { backgroundColor: currentTheme.border }]}>
              <Text style={[styles.stylistAvatarText, { color: currentTheme.text }]}>
                {stylist.name.charAt(0)}
              </Text>
            </View>
            <View style={styles.stylistInfo}>
              <Text style={[styles.stylistName, { color: currentTheme.text }]}>{stylist.name}</Text>
              <Text style={[styles.stylistLocation, { color: currentTheme.textSecondary }]}>{stylist.location}</Text>
              <Text style={[styles.stylistBio, { color: currentTheme.textSecondary }]} numberOfLines={2}>
                {stylist.bio}
              </Text>
            </View>
          </View>
          <View style={styles.stylistTags}>
            {stylist.styles.slice(0, 3).map((style, index) => (
              <View key={index} style={[styles.tag, { backgroundColor: currentTheme.border }]}>
                <Text style={[styles.tagText, { color: currentTheme.text }]}>{style}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderPhotoFeed = () => {
    const photoUrls = [
      'https://kith.com/cdn/shop/files/2_8eb501dd-016f-48c8-bb33-c9f70fd33522.jpg?v=1750188173&width=1920',
      'https://kith.com/cdn/shop/files/1_dca1c031-48a3-4ff8-ae08-8b5f47007cec.jpg?v=1750188349&width=1920',
      'https://d1jsygvae9sbou.cloudfront.net/images/origin/xlarge_SS_25_D1_LB_IG_4_X5_021925_37_598063aff8.jpg',
      'https://d1jsygvae9sbou.cloudfront.net/images/origin/xlarge_SS_25_D1_LB_IG_4_X5_021925_83_b56d659b40.jpg',
      'https://cdn.sanity.io/images/ldn4d4qt/ss25-production-2025-02-16/6ffa7dfe361dbaa3f3d236a668a476dd773f8d2c-1638x2048.jpg?w=1000&q=80&auto=format',
      'https://danielsimmons.co/cdn/shop/files/GRADO_NAVY_SHIRT_07_e8da4b34-6b5d-4e71-86b2-4179a1639212_900x.jpg?v=1747066753'
    ];

    return (
      <ScrollView style={[styles.screen, { backgroundColor: currentTheme.background }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackToMain} style={styles.backButton}>
            <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Back</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Photo Feed</Text>
          <View style={styles.headerSpacer} />
        </View>
        
        {/* Photo Grid */}
        <View style={styles.photoGrid}>
          {photoUrls.map((url, index) => (
            <View key={index} style={[styles.photoItem, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
              <Image 
                source={{ uri: url }} 
                style={styles.photoImage}
                resizeMode="cover"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const renderBlog = () => (
    <ScrollView style={[styles.screen, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToMain} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Blog</Text>
        <View style={styles.headerSpacer} />
      </View>
      
      {/* Blog Posts */}
      <View style={styles.blogSection}>
        {mockBlogPosts.map((post) => (
          <View key={post.id} style={[styles.blogPost, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
            <Text style={[styles.blogTitle, { color: currentTheme.text }]}>{post.title}</Text>
            <Text style={[styles.blogExcerpt, { color: currentTheme.textSecondary }]}>{post.excerpt}</Text>
            <Text style={[styles.blogAuthor, { color: currentTheme.textTertiary }]}>By {post.author}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

  const renderMessages = () => (
    <View style={[styles.screen, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToMain} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Messages</Text>
        <View style={styles.headerSpacer} />
      </View>
      
      {/* Messages List */}
      <View style={styles.messagesSection}>
        {mockMessages.map((message) => (
          <View key={message.id} style={[styles.messageItem, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
            <Text style={[styles.messageName, { color: currentTheme.text }]}>{message.stylistName}</Text>
            <Text style={[styles.messagePreview, { color: currentTheme.textSecondary }]}>{message.preview}</Text>
            <Text style={[styles.messageTime, { color: currentTheme.textTertiary }]}>{message.timestamp}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderProfile = () => (
    <ScrollView style={[styles.screen, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToMain} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Profile</Text>
        <View style={styles.headerSpacer} />
      </View>
      
      {/* Profile Content */}
      <View style={styles.profileSection}>
        <View style={[styles.profileCard, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
          <Text style={[styles.profileName, { color: currentTheme.text }]}>John Doe</Text>
          <Text style={[styles.profileType, { color: currentTheme.textSecondary }]}>Client</Text>
        </View>
        
        <View style={styles.profileStats}>
          <View style={[styles.statItem, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
            <Text style={[styles.statNumber, { color: currentTheme.text }]}>5</Text>
            <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Stylists Followed</Text>
          </View>
          <View style={[styles.statItem, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
            <Text style={[styles.statNumber, { color: currentTheme.text }]}>12</Text>
            <Text style={[styles.statLabel, { color: currentTheme.textSecondary }]}>Appointments</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const renderQuizResults = () => (
    <ScrollView style={[styles.screen, { backgroundColor: currentTheme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToMain} style={styles.backButton}>
          <Text style={[styles.backButtonText, { color: currentTheme.text }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentTheme.text }]}>Quiz Results</Text>
        <View style={styles.headerSpacer} />
      </View>
      
      <View style={styles.quizResultsSection}>
        <Text style={[styles.quizResultsTitle, { color: currentTheme.text }]}>Your Style Profile</Text>
        {quizAnswers && Object.entries(quizAnswers).map(([key, value]) => (
          <View key={key} style={[styles.quizResultItem, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}>
            <Text style={[styles.quizResultLabel, { color: currentTheme.textSecondary }]}>{key}:</Text>
            <Text style={[styles.quizResultValue, { color: currentTheme.text }]}>{value}</Text>
          </View>
        ))}
        
        <Text style={[styles.recommendationsTitle, { color: currentTheme.text }]}>Recommended Stylists</Text>
        {mockStylists.slice(0, 3).map((stylist) => (
          <TouchableOpacity
            key={stylist.id}
            style={[styles.recommendedStylist, { backgroundColor: currentTheme.surface, borderColor: currentTheme.border }]}
            onPress={() => handleStylistPress(stylist)}
          >
            <Text style={[styles.recommendedStylistName, { color: currentTheme.text }]}>{stylist.name}</Text>
            <Text style={[styles.recommendedStylistLocation, { color: currentTheme.textSecondary }]}>{stylist.location}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case 'stylistProfile':
        return selectedStylist ? (
          <StylistProfile
            stylist={selectedStylist}
            onBookPress={handleBookPress}
            onMessagePress={handleMessagePress}
            onBack={handleBackToMain}
          />
        ) : renderHomeScreen();
      case 'booking':
        return selectedStylist ? (
          <BookingScreen
            stylist={selectedStylist}
            onBook={handleBookingComplete}
            onBack={() => setCurrentScreen('stylistProfile')}
          />
        ) : renderHomeScreen();
      case 'quiz':
        return (
          <StyleQuiz
            onComplete={handleQuizComplete}
            onBack={handleBackToMain}
          />
        );
      case 'quizResults':
        return renderQuizResults();
      case 'stylists':
        return renderStylistsList();
      default:
        // Handle tab-based navigation
        switch (activeTab) {
          case 'home':
            return renderHomeScreen();
          case 'photos':
            return renderPhotoFeed();
          case 'blog':
            return renderBlog();
          case 'messages':
            return renderMessages();
          case 'profile':
            return renderProfile();
          default:
            return renderHomeScreen();
        }
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={currentTheme.background} 
      />
      
      {/* Main Content */}
      {renderScreen()}
      
      {/* Bottom Navigation - Show on all screens except specific ones */}
      {!['stylistProfile', 'booking', 'quiz'].includes(currentScreen) && (
        <View style={[styles.bottomNav, { backgroundColor: currentTheme.surface, borderTopColor: currentTheme.border }]}>
          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'home' && styles.navItemActive]}
            onPress={() => {
              setActiveTab('home');
              setCurrentScreen('main');
            }}
          >
            <Text style={[styles.navText, { color: currentTheme.textTertiary }, activeTab === 'home' && { color: currentTheme.accent, fontWeight: 'bold' }]}>Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'photos' && styles.navItemActive]}
            onPress={() => {
              setActiveTab('photos');
              setCurrentScreen('main');
            }}
          >
            <Text style={[styles.navText, { color: currentTheme.textTertiary }, activeTab === 'photos' && { color: currentTheme.accent, fontWeight: 'bold' }]}>Photos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'blog' && styles.navItemActive]}
            onPress={() => {
              setActiveTab('blog');
              setCurrentScreen('main');
            }}
          >
            <Text style={[styles.navText, { color: currentTheme.textTertiary }, activeTab === 'blog' && { color: currentTheme.accent, fontWeight: 'bold' }]}>Blog</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'messages' && styles.navItemActive]}
            onPress={() => {
              setActiveTab('messages');
              setCurrentScreen('main');
            }}
          >
            <Text style={[styles.navText, { color: currentTheme.textTertiary }, activeTab === 'messages' && { color: currentTheme.accent, fontWeight: 'bold' }]}>Messages</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.navItem, activeTab === 'profile' && styles.navItemActive]}
            onPress={() => {
              setActiveTab('profile');
              setCurrentScreen('main');
            }}
          >
            <Text style={[styles.navText, { color: currentTheme.textTertiary }, activeTab === 'profile' && { color: currentTheme.accent, fontWeight: 'bold' }]}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
  },
  headerSpacer: {
    width: 60,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
  },
  searchPlaceholder: {
    fontSize: 16,
  },
  featuredSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  featuredCard: {
    width: 200,
    height: 120,
    marginLeft: 20,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    borderWidth: 1,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featuredSubtitle: {
    fontSize: 14,
  },
  quickLinksSection: {
    marginBottom: 30,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },
  quickLink: {
    width: '45%',
    height: 80,
    margin: '2.5%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  quickLinkText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  stylistCard: {
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
  },
  stylistCardHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stylistAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stylistAvatarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  stylistInfo: {
    flex: 1,
    marginLeft: 15,
  },
  stylistName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  stylistLocation: {
    fontSize: 14,
    marginBottom: 5,
  },
  stylistBio: {
    fontSize: 14,
    lineHeight: 20,
  },
  stylistTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  photoItem: {
    width: '48%',
    height: 200,
    margin: '1%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  blogSection: {
    padding: 20,
  },
  blogPost: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  blogExcerpt: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  blogAuthor: {
    fontSize: 12,
  },
  messagesSection: {
    padding: 20,
  },
  messageItem: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messagePreview: {
    fontSize: 14,
    marginBottom: 5,
  },
  messageTime: {
    fontSize: 12,
  },
  profileSection: {
    padding: 20,
  },
  profileCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileType: {
    fontSize: 16,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    borderWidth: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
  },
  quizResultsSection: {
    padding: 20,
  },
  quizResultsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quizResultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  quizResultLabel: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  quizResultValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  recommendationsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  recommendedStylist: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  recommendedStylistName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recommendedStylistLocation: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingBottom: 20,
    paddingTop: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  navItemActive: {
    borderTopWidth: 2,
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
  themeToggle: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  themeToggleText: {
    fontSize: 20,
  },
});

export default App;
