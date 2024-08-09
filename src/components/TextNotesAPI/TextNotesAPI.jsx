import React from 'react';
import TextProperties from './TextProperties';
import TextAgents from './TextAgents';
import TextFAQ from './TextFAQ';
import TextArticles from './TextArticles';

const TextNotesAPI = () => {
    return (
        <div>
            <TextProperties />
            <TextAgents />
            <TextFAQ />
            <TextArticles />
        </div>
    );
};

export default TextNotesAPI;
