import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Last Bastion: Sunken City — Support',
  description: 'Help with Last Bastion: Sunken City, saved progress, settings and reporting a problem to developer Viet Tran.',
  alternates: { canonical: '/last-bastion/support' },
};

export default function SupportPage() {
  return <article>
    <h1>Last Bastion: Sunken City</h1>
    <p>Build your defense, protect the Bastion and survive the next wave. This is the support page for the iPhone tower-defense game by Viet Tran.</p>
    <h2>Get help</h2>
    <p>Email <a href="mailto:it@viet.fi?subject=Last%20Bastion%20support">it@viet.fi</a> with your question or problem.</p>
    <p>For a bug report, include your iPhone model, iOS version, game version or TestFlight build, and what happened just before the issue. A screenshot is helpful if you are comfortable sharing one. For stuttering, mention the wave and whether you were playing at 1×, 2× or 4× speed.</p>
    <p>Please do not send passwords, payment details or unrelated personal information.</p>
    <h2>Saved progress</h2>
    <p>Your progress is saved on your iPhone. There is no game account or game-provided cloud sync. Use Save &amp; Home when leaving a run; closing the app abruptly may return you to the latest completed checkpoint.</p>
    <p>If something seems wrong with your save, contact support before deleting the app or resetting data. We cannot restore a deleted save from a developer server.</p>
    <h2>Sound and game settings</h2>
    <p>Open the gear menu to access settings. Music and sound effects have separate volume sliders. During battle, use the speed control to choose 1×, 2× or 4×. The in-game Guide explains placement, upgrades, potions and enemy counters.</p>
    <h2>Delete local data</h2>
    <p>Open Settings → More options → Saved progress → Review reset, then confirm Erase all data. This removes runs, unlocks, records and preferences from the game on this device.</p>
    <p>Read the <Link href="/last-bastion/privacy">privacy policy</Link> for more about local storage and support messages.</p>
  </article>;
}
