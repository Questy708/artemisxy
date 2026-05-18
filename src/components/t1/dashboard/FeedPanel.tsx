'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Zap, BookOpen, Compass, Globe, Target, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* ─── Feed Post Data ─── */
interface FeedPost {
  id: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    stage: string;
  };
  timestamp: string;
  dimension?: string;
  dimensionSlug?: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isBookmarked: boolean;
  tags: string[];
}

const INITIAL_POSTS: FeedPost[] = [
  {
    id: '1',
    author: { name: 'Dr. Amara Osei', role: 'Catalyst — Center for Synthetic Intelligence', avatar: 'AO', stage: 'δ' },
    timestamp: '2 hours ago',
    dimension: 'Centers of Inquiry',
    dimensionSlug: 'centers-of-inquiry',
    content: 'Just wrapped up a fascinating co-thinking session with our newest Pathfinders. They asked a question that stopped me cold: "What happens when an AI system develops genuine curiosity?" Not programmable curiosity — real, self-directed wonder. We spent three hours on that question and didn\'t reach an answer. That\'s the point. #CentersOfInquiry',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 47,
    comments: 12,
    isLiked: false,
    isBookmarked: false,
    tags: ['Synthetic Intelligence', 'CoThinking', 'Curiosity'],
  },
  {
    id: '2',
    author: { name: 'Kai Nakamura', role: 'Navigator — 3rd Loop Return', avatar: 'KN', stage: 'γ' },
    timestamp: '5 hours ago',
    dimension: 'Infinite Learning Continuum',
    dimensionSlug: 'open-loop-learning',
    content: 'Today marks my third return to Artemis. First time was as a Pathfinder studying computational ethics. Second loop: bio-regenerative systems. Now? I\'m here to explore how AI governance frameworks could reshape urban planning. The Continuum isn\'t just about coming back — it\'s about coming back different. Each return peels back another layer of what I thought I knew.',
    likes: 83,
    comments: 21,
    isLiked: false,
    isBookmarked: false,
    tags: ['Continuum', 'Lifelong Learning', 'Career Pivot'],
  },
  {
    id: '3',
    author: { name: 'The Artemis Journal', role: 'Official Publication', avatar: 'AJ', stage: '∞' },
    timestamp: '8 hours ago',
    dimension: 'SkillPrints',
    dimensionSlug: 'global-skills-matrix',
    content: '📊 NEW DATA: The average SkillPrint now contains 340 verified competencies — up from 12 in the old degree model. More remarkably, 67% of those skills were acquired outside traditional classroom settings. The Global Skills Matrix is revealing something profound: learning was never confined to institutions. We just refused to see it.',
    likes: 156,
    comments: 34,
    isLiked: false,
    isBookmarked: false,
    tags: ['SkillPrints', 'Data', 'GlobalSkills'],
  },
  {
    id: '4',
    author: { name: 'Priya Sharma', role: 'Pathfinder — Class of 2100', avatar: 'PS', stage: 'β' },
    timestamp: '12 hours ago',
    dimension: 'The World as Campus',
    dimensionSlug: 'darwin-voyage',
    content: 'Day 47 in the Singapore Node. Yesterday I studied mangrove restoration ecology in the morning and quantum computing ethics in the afternoon — in the same building, with practitioners from both fields. The World as Campus isn\'t just about travel. It\'s about collision. Ideas that would never meet in a traditional university crash into each other here and create something entirely new.',
    image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 92,
    comments: 18,
    isLiked: false,
    isBookmarked: false,
    tags: ['Singapore Node', 'Darwin Voyage', 'Interdisciplinary'],
  },
  {
    id: '5',
    author: { name: 'Prof. Elena Voss', role: 'Legacy Builder — 52 years at Artemis', avatar: 'EV', stage: 'Ω' },
    timestamp: '1 day ago',
    dimension: 'The Artemis Oath',
    dimensionSlug: 'purpose-learning',
    content: 'I took the Oath in 2048. My mission: "Make every hospital a place of learning, not just healing." I\'m 89 years old and I\'m still working on it. That\'s the thing about the Oath — it doesn\'t expire. It doesn\'t care about your age or your title. It asks: what will you commit your intelligence to? And then it holds you to it. Not with punishment, but with community. Every year, my cohort reconvenes. We share progress. We share failure. We share the stubborn belief that purpose is a practice, not a destination.',
    likes: 234,
    comments: 56,
    isLiked: false,
    isBookmarked: false,
    tags: ['Artemis Oath', 'Purpose Learning', 'Legacy'],
  },
  {
    id: '6',
    author: { name: 'Tomás Reyes', role: 'Navigator — Adaptive Pacing Research', avatar: 'TR', stage: 'γ' },
    timestamp: '1 day ago',
    dimension: 'Adaptive Paced Learning',
    dimensionSlug: 'adaptive-paced-learning',
    content: 'Hot take: Adaptive Pacing doesn\'t mean "learn slower." It means learn at the rhythm that produces genuine understanding. I watched a Pathfinder master computational thinking in 8 weeks — because she was ready. I watched another take 14 months on the same material — and she emerged with deeper intuition than anyone in her cohort. The data is clear: time is not the variable. Depth is.',
    likes: 67,
    comments: 29,
    isLiked: false,
    isBookmarked: false,
    tags: ['AdaptivePacing', 'Calibrate', 'Mastery'],
  },
];

const DIMENSION_ICONS: Record<string, React.ElementType> = {
  'open-loop-learning': Compass,
  'adaptive-paced-learning': Zap,
  'global-skills-matrix': BookOpen,
  'purpose-learning': Target,
  'centers-of-inquiry': FlaskConical,
  'darwin-voyage': Globe,
};

interface FeedPanelProps {
  onDimensionClick: (slug: string) => void;
}

export function FeedPanel({ onDimensionClick }: FeedPanelProps) {
  const [posts, setPosts] = useState<FeedPost[]>(INITIAL_POSTS);
  const [newPostText, setNewPostText] = useState('');

  const toggleLike = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, isLiked: !p.isLiked, likes: p.isLiked ? p.likes - 1 : p.likes + 1 } : p));
  };

  const toggleBookmark = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, isBookmarked: !p.isBookmarked } : p));
  };

  const handlePost = () => {
    if (!newPostText.trim()) return;
    const newPost: FeedPost = {
      id: `new-${Date.now()}`,
      author: { name: 'You', role: 'Explorer', avatar: 'YO', stage: 'β' },
      timestamp: 'Just now',
      content: newPostText,
      likes: 0,
      comments: 0,
      isLiked: false,
      isBookmarked: false,
      tags: [],
    };
    setPosts(prev => [newPost, ...prev]);
    setNewPostText('');
  };

  return (
    <div className="max-w-2xl mx-auto w-full px-4 py-6 space-y-4">
      {/* New Post Input */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#8A0000] flex items-center justify-center text-white text-xs font-bold shrink-0">
            YO
          </div>
          <div className="flex-1">
            <textarea
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="Share a thought, insight, or question about the dimensions..."
              className="w-full resize-none border-0 outline-none text-sm placeholder:text-gray-400 bg-transparent min-h-[60px]"
              rows={2}
            />
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2">
                {Object.entries(DIMENSION_ICONS).slice(0, 4).map(([slug, Icon]) => (
                  <button
                    key={slug}
                    onClick={() => onDimensionClick(slug)}
                    className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-[#8A0000] transition-colors"
                    title={slug}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <button
                onClick={handlePost}
                disabled={!newPostText.trim()}
                className="px-4 py-1.5 bg-[#8A0000] text-white text-sm font-medium rounded-full hover:bg-[#6B0000] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed Posts */}
      <AnimatePresence>
        {posts.map((post) => {
          const DimIcon = post.dimensionSlug ? DIMENSION_ICONS[post.dimensionSlug] : null;
          return (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Post Header */}
              <div className="p-4 pb-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {post.author.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900">{post.author.name}</span>
                        <span className="text-[10px] font-mono text-[#8A0000] bg-[#8A0000]/5 px-1.5 py-0.5 rounded">
                          {post.author.stage}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dimension Tag */}
              {post.dimension && post.dimensionSlug && (
                <div className="px-4 pt-3">
                  <button
                    onClick={() => onDimensionClick(post.dimensionSlug!)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
                  >
                    {DimIcon && <DimIcon className="w-3 h-3 text-[#8A0000]" />}
                    {post.dimension}
                  </button>
                </div>
              )}

              {/* Post Content */}
              <div className="p-4">
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="px-4 pb-3">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full rounded-lg object-cover max-h-80"
                  />
                </div>
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-[#8A0000] font-medium">#{tag}</span>
                  ))}
                </div>
              )}

              {/* Engagement Stats */}
              <div className="px-4 py-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>

              {/* Action Buttons */}
              <div className="px-2 py-2 flex items-center justify-between border-t border-gray-100">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    post.isLiked ? 'text-[#8A0000]' : 'text-gray-500 hover:text-[#8A0000] hover:bg-[#8A0000]/5'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-[#8A0000]' : ''}`} />
                  Like
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Comment
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  onClick={() => toggleBookmark(post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    post.isBookmarked ? 'text-[#8A0000]' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${post.isBookmarked ? 'fill-[#8A0000]' : ''}`} />
                </button>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
