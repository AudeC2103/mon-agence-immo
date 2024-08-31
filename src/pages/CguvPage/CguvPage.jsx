// ./src/pages/CGUVPage/CGUVPage.jsx

import React from 'react';
import s from './style.module.scss';

const CGUVPage = () => {
  return (
    <div className={s.cguvContainer}>
      <h1>Conditions Générales d’Utilisation et de Vente (CGUV)</h1>

      <section className={s.section}>
        <h2>1. Introduction</h2>
        <p>
          Bienvenue sur mon-agence-immo, le site dédié à la vente de biens immobiliers. Les présentes Conditions Générales d’Utilisation et de Vente (ci-après « CGUV ») régissent les relations entre la société mon-agence-immo, les utilisateurs et les clients du site www.mon-agence-immo.com (ci-après le « Site »). L’utilisation du Site est conditionnée à l’acceptation intégrale et au respect des CGUV décrites ci-après.
        </p>
      </section>

      <section className={s.section}>
        <h2>2. Propriété intellectuelle</h2>
        <p>
          Les contenus du Site, incluant les textes, graphismes, logos ainsi que les images des annonces sont la propriété exclusive de mon-agence-immo, sauf mention contraire. De plus, mon-agence-immo utilise des images sous licence provenant de banques d’images telles que FREEPIK, UNSPASH, PIXABAY, PEXELS, et FLATICON dont elle respecte les conditions d’utilisation spécifiques à chaque plateforme. Toute reproduction, modification, publication ou adaptation de ces éléments, quel que soit le moyen ou le procédé utilisé, sans autorisation préalable écrite de mon-agence-immo, est strictement interdite.
        </p>
      </section>

      <section className={s.section}>
        <h2>3. Collecte des données personnelles</h2>
        <p>
          Dans le cadre de l’utilisation du Site, mon-agence-immo recueille les données personnelles suivantes : nom, prénom et adresse e-mail des utilisateurs. Ces informations sont utilisées pour la gestion des relations clients et pour les opérations de marketing. mon-agence-immo s’engage à protéger et à sécuriser ces données, conformément au Règlement Général sur la Protection des Données (RGPD). Les utilisateurs disposent d’un droit d’accès, de rectification, d’opposition et de suppression de leurs données personnelles, qu’ils peuvent exercer à tout moment en contactant le service client de mon-agence-immo.
        </p>
      </section>

      <section className={s.section}>
        <h2>4. Utilisation du site</h2>
        <p>
          Le Site est destiné à un usage strictement professionnel en matière de vente de biens immobiliers. Les utilisateurs s’engagent à ne pas utiliser le Site de manière frauduleuse pour des fins contraires à la loi. mon-agence-immo se réserve le droit de refuser l’accès au Site, unilatéralement et sans notification préalable, à tout utilisateur ne respectant pas les CGUV.
        </p>
      </section>

      <section className={s.section}>
        <h2>5. Responsabilité</h2>
        <p>
          mon-agence-immo s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. mon-agence-immo ne peut cependant garantir l’exactitude, la précision ou l’exhaustivité des informations mises à disposition sur le Site, y compris l’ensemble des hyperliens ou toute autre liaison informatique utilisée directement ou indirectement à partir du Site. Il revient aux visiteurs du Site de vérifier l’information par d’autres moyens, y compris en contactant directement mon-agence-immo.
        </p>
      </section>

      <section className={s.section}>
        <h2>6. Modification des conditions</h2>
        <p>
          mon-agence-immo se réserve le droit de modifier les CGUV à tout moment. Les modifications entreront en vigueur dès leur publication sur le Site. Les utilisateurs sont donc invités à consulter régulièrement les CGUV afin de prendre connaissance de toute modification.
        </p>
      </section>

      <section className={s.section}>
        <h2>7. Contact</h2>
        <p>
          Pour toute question ou réclamation concernant l’utilisation du Site, vous pouvez contacter mon-agence-immo à l’adresse suivante : serviceclient@mon-agence-immo.com.
        </p>
      </section>

      <section className={s.section}>
        <h2>Conclusion</h2>
        <p>
          En utilisant le Site, vous reconnaissez avoir lu et accepté ces CGUV. Si vous n’êtes pas d’accord avec une partie des termes et conditions, vous êtes invité à ne pas utiliser le Site mon-agence-immo.
        </p>
      </section>
    </div>
  );
};

export default CGUVPage;
