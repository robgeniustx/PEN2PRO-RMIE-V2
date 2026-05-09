import { useState } from 'react';

export default function SocialPostCard({ post }) {
  const [copied, setCopied] = useState('');
  const copy = async (label, value) => { await navigator.clipboard.writeText(Array.isArray(value) ? value.join(' ') : value); setCopied(label); setTimeout(() => setCopied(''), 1200); };
  return <div className='bg-slate-900 border border-blue-500 rounded-xl p-4 text-white space-y-2'><div className='text-xs text-orange-300'>{post.platform} • {post.post_type}</div><div>{post.hook}</div><div>{post.caption}</div><div>{post.cta}</div><div>{(post.hashtags||[]).join(' ')}</div><button onClick={() => copy('post', `${post.hook}\n${post.caption}`)} className='text-blue-400'>Copy</button>{copied && <span className='text-xs ml-2'>Copied</span>}</div>;
}
