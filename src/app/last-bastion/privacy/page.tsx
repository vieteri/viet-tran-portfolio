import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Last Bastion: Sunken City — Privacy Policy',
  description: 'How Last Bastion: Sunken City stores game progress locally and handles support enquiries.',
  alternates: { canonical: '/last-bastion/privacy' },
};

export default function PrivacyPage() {
  return <article>
    <h1>Privacy policy</h1>
    <p>Last Bastion: Sunken City is an offline iPhone game operated by Viet Tran in Finland. For privacy questions, contact <a href="mailto:it@viet.fi">it@viet.fi</a>.</p>
    <p className="updated">Last updated: 24 September 2026</p>
    <h2>Information stored by the game</h2>
    <p>The game stores settings, commander and tower choices, unlocks, play statistics, run history and resumable checkpoints in a local database on your iPhone. Ordinary gameplay does not send these saves to a developer server.</p>
    <p>The game does not require an account and contains no advertising, analytics, tracking, online multiplayer, in-app purchases or game-provided cloud-save service. It does not request access to your contacts, location, camera or microphone.</p>
    <h2>Your control over saved data</h2>
    <p>You can erase local game data in Settings → More options → Saved progress → Review reset, then confirm Erase all data. This removes runs, unlocks, records and preferences. There is no game-provided cloud recovery. Any iOS device backup or restoration is governed by your Apple settings.</p>
    <h2>When you contact support</h2>
    <p>If you email support, Viet Tran receives your email address and the information you choose to send, such as your message, device details or screenshots. This information is used to answer your enquiry and investigate the issue. Email providers process the message to deliver and store it.</p>
    <p>Support correspondence is retained only as needed to handle the enquiry and any related follow-up or applicable obligations. You may ask to access, correct or delete your support correspondence by emailing it@viet.fi. Do not include passwords or unrelated sensitive information.</p>
    <h2>Apple services</h2>
    <p>Apple may process installation, App Store, TestFlight and diagnostic information according to your settings and its own policies. If you submit TestFlight feedback or share diagnostics through Apple, those reports may be made available to the developer. See <a href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a>.</p>
    <h2>This support website</h2>
    <p>These support and privacy pages are hosted on Vercel. Visiting the website sends ordinary web request information, such as your IP address, browser information and the requested page, to the hosting service to deliver and secure the website. This is separate from offline gameplay. See <a href="https://vercel.com/legal/privacy-policy">Vercel’s privacy policy</a>.</p>
    <h2>Changes and contact</h2>
    <p>This policy will be updated if the game’s data practices change. The date above identifies the latest revision. Questions can be sent to <a href="mailto:it@viet.fi">it@viet.fi</a> or through the <Link href="/last-bastion/support">support page</Link>.</p>
  </article>;
}
