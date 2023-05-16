import React from 'react';
import { VisualDescription } from 'global/storybook/components/visual-description';
import { Icon } from '@chakra-ui/react';
import {
  FaRegFile,
  FaRegUser,
  FaRegPaperPlane,
  FaRegImage,
  FaRegHeart,
  FaRegComment,
  FaRegEnvelope,
  FaRegCheckCircle,
  FaRegEdit,
  FaRegThumbsUp,
  FaRegCompass,
  FaRegTrashAlt,
  FaSearch,
} from 'react-icons/fa';

const icons = [
  {
    name: 'Checked Circle',
    fa: FaRegCheckCircle,
  },
  {
    name: 'Comment',
    fa: FaRegComment,
  },
  {
    name: 'Compass',
    fa: FaRegCompass,
  },
  {
    name: 'Edit',
    fa: FaRegEdit,
  },
  {
    name: 'Envelope',
    fa: FaRegEnvelope,
  },
  {
    name: 'File',
    fa: FaRegFile,
  },
  {
    name: 'Heart',
    fa: FaRegHeart,
  },
  {
    name: 'Image',
    fa: FaRegImage,
  },
  {
    name: 'Paper Plane',
    fa: FaRegPaperPlane,
  },
  {
    name: 'Search',
    fa: FaSearch,
  },
  {
    name: 'Thumbs up',
    fa: FaRegThumbsUp,
  },
  {
    name: 'Trash',
    fa: FaRegTrashAlt,
  },
  {
    name: 'User',
    fa: FaRegUser,
  },
];

export const IconOptions: React.FC = () => {
  return (
    <>
      {icons.map(icon => {
        return (
          <VisualDescription title={`${icon.name}`}>
            <Icon as={icon.fa} boxSize={6} m={2} />
          </VisualDescription>
        );
      })}
    </>
  );
};
