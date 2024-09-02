import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccordionItem from './AccordionItem'; // Assurez-vous que le chemin est correct

describe('AccordionItem', () => {
  const question = 'Quelle est votre politique de retour ?';
  const answer = 'Notre politique de retour est de 30 jours avec remboursement complet.';

  it('affiche la question correctement', () => {
    render(<AccordionItem question={question} answer={answer} />);

    expect(screen.getByText(question)).toBeInTheDocument();
  });

  it('ne montre pas la réponse par défaut', () => {
    render(<AccordionItem question={question} answer={answer} />);

    expect(screen.queryByText(answer)).not.toBeInTheDocument();
  });

  it('affiche la réponse lorsque la question est cliquée', () => {
    render(<AccordionItem question={question} answer={answer} />);

    fireEvent.click(screen.getByText(question));

    expect(screen.getByText(answer)).toBeInTheDocument();
  });

  it('masque la réponse lorsque la question est cliquée à nouveau', () => {
    render(<AccordionItem question={question} answer={answer} />);

    const questionElement = screen.getByText(question);
    
    // Premier clic pour ouvrir
    fireEvent.click(questionElement);
    expect(screen.getByText(answer)).toBeInTheDocument();

    // Deuxième clic pour fermer
    fireEvent.click(questionElement);
    expect(screen.queryByText(answer)).not.toBeInTheDocument();
  });
});
