import React from 'react';
import { Canvas } from '@storybook/blocks';
import * as HeaderStories from './Header.stories';

export const MyBlock: React.FC = () => <Canvas of={HeaderStories.LoggedIn} />