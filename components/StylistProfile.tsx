import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface StylistProfileProps {
  stylist: {
    id: string;
    name: string;
    bio: string;
    pricing: number; // 1-5 scale
    styles: string[];
    events: string[];
    brands: string[];
    travel: boolean;
    services: Service[];
    portfolio: string[];
    recentBlogPost?: {
      title: string;
      excerpt: string;
      date: string;
    };
  };
  onBookPress: () => void;
  onMessagePress: () => void;
  onBack: () => void;
}

const StylistProfile: React.FC<StylistProfileProps> = ({
  stylist,
  onBookPress,
  onMessagePress,
  onBack,
}) => {
  const renderPricingMeter = (pricing: number) => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.pricingDot,
            i <= pricing ? styles.pricingDotActive : styles.pricingDotInactive,
          ]}
        />
      );
    }
    return <View style={styles.pricingMeter}>{dots}</View>;
  };

  const renderTags = (items: string[], title: string) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.tagsContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Stylist Profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <View style={styles.profileImage}>
            <Text style={styles.profileImageText}>
              {stylist.name.charAt(0)}
            </Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.name}>{stylist.name}</Text>
            <Text style={styles.bio}>{stylist.bio}</Text>
            <View style={styles.pricingContainer}>
              <Text style={styles.pricingLabel}>Pricing:</Text>
              {renderPricingMeter(stylist.pricing)}
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.bookButton} onPress={onBookPress}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton} onPress={onMessagePress}>
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>
        </View>

        {/* Travel Status */}
        <View style={styles.travelSection}>
          <Text style={styles.travelText}>
            {stylist.travel ? '✈️ Available for Travel' : '📍 Local Only'}
          </Text>
        </View>

        {/* Styles */}
        {renderTags(stylist.styles, 'Styles')}

        {/* Events */}
        {renderTags(stylist.events, 'Events')}

        {/* Brands */}
        {renderTags(stylist.brands, 'Brands')}

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          {stylist.services.map((service, index) => (
            <View key={index} style={styles.serviceItem}>
              <Text style={styles.serviceText}>• {service.name}</Text>
            </View>
          ))}
        </View>

        {/* Portfolio */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Portfolio</Text>
          <View style={styles.portfolioGrid}>
            {stylist.portfolio.map((photo, index) => (
              <View key={index} style={styles.portfolioItem}>
                <Text style={styles.portfolioPlaceholder}>Photo {index + 1}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Blog Post */}
        {stylist.recentBlogPost && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Blog Post</Text>
            <View style={styles.blogPost}>
              <Text style={styles.blogTitle}>{stylist.recentBlogPost.title}</Text>
              <Text style={styles.blogExcerpt}>
                {stylist.recentBlogPost.excerpt}
              </Text>
              <Text style={styles.blogDate}>{stylist.recentBlogPost.date}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSpacer: {
    width: 60,
  },
  content: {
    flex: 1,
  },
  profileInfo: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#333333',
  },
  profileImageText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 10,
    lineHeight: 20,
  },
  pricingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pricingLabel: {
    fontSize: 14,
    color: '#CCCCCC',
    marginRight: 10,
  },
  pricingMeter: {
    flexDirection: 'row',
  },
  pricingDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 4,
  },
  pricingDotActive: {
    backgroundColor: '#FFFFFF',
  },
  pricingDotInactive: {
    backgroundColor: '#333333',
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  messageButton: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  messageButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  travelSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  travelText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  tagText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  serviceItem: {
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  portfolioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  portfolioItem: {
    width: '48%',
    height: 120,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  portfolioPlaceholder: {
    fontSize: 12,
    color: '#888888',
  },
  blogPost: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  blogExcerpt: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 8,
    lineHeight: 20,
  },
  blogDate: {
    fontSize: 12,
    color: '#888888',
  },
});

export default StylistProfile; 