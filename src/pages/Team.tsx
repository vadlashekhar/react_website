import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import TeamHero from '../components/team/TeamHero';
import TeamGrid from '../components/team/TeamGrid';
import TeamValues from '../components/team/TeamValues';
import JoinTeam from '../components/team/JoinTeam';

const Team = () => {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <TeamGrid />
      <TeamValues />
      <JoinTeam />
    </div>
  );
};

export default Team;