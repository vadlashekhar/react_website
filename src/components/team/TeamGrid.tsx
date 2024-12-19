import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TeamMember } from '../../types/team';

const TeamGrid = () => {
  const team: TeamMember[] = [
    {
      name: 'John Smith',
      position: 'CEO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@example.com',
      },
    },
  ].concat(Array(7).fill(null).map((_, i) => ({
    name: `Team Member ${i + 2}`,
    position: ['Developer', 'Designer', 'Manager', 'Marketing'][i % 4],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'team@example.com',
    },
  })));

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-gray-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-gray-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;