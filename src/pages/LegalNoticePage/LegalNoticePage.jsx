// ./src/pages/LegalNoticePage/LegalNoticePage.jsx

import React from 'react';
import s from './style.module.scss';

const LegalNoticePage = () => {
  return (
    <div className={s.legalNoticeContainer}>
      <h1>Mentions légales</h1>

      <section className={s.section}>
        <h2>Identification de l’agence</h2>
        <p><strong>Nom de l'agence :</strong> mon-agence-immo</p>
        <p><strong>Forme juridique :</strong> SARL</p>
        <p><strong>Adresse du siège social :</strong> 123 Rue de l'Immobilier, 35000 Rennes, France</p>
        <p><strong>Montant du capital social :</strong> 50 000 €</p>
      </section>

      <section className={s.section}>
        <h2>Informations sur l’inscription au registre</h2>
        <p><strong>Numéro d’inscription au Registre du Commerce et des Sociétés (RCS) :</strong> RCS Rennes 123 456 789</p>
        <p><strong>Numéro de TVA intracommunautaire :</strong> FR12345678901</p>
      </section>

      <section className={s.section}>
        <h2>Coordonnées</h2>
        <p><strong>Numéro de téléphone :</strong> +33 2 99 00 00 00</p>
        <p><strong>Adresse e-mail :</strong> contact@mon-agence-immo.fr</p>
        <p><strong>Adresse du site web :</strong> www.mon-agence-immo.fr</p>
      </section>

      <section className={s.section}>
        <h2>Informations professionnelles</h2>
        <p><strong>Carte professionnelle d’agent immobilier :</strong> CPI 3501 2019 000 123 456 délivrée par la CCI de Rennes</p>
        <p><strong>Assurance de responsabilité civile professionnelle :</strong> AXA Assurances - Couverture géographique : France entière</p>
      </section>

      <section className={s.section}>
        <h2>Mentions relatives à la CNIL</h2>
        <p>
          Le site www.mon-agence-immo.fr collecte des données personnelles pour la gestion des clients. Ces données sont traitées en conformité avec la réglementation applicable, y compris le RGPD.
        </p>
        <p>
          Vous disposez de droits d’accès, de rectification, de suppression, et d’opposition que vous pouvez exercer en nous contactant par e-mail à l'adresse : dpo@mon-agence-immo.fr.
        </p>
      </section>

      <section className={s.section}>
        <h2>Médiateur de la consommation</h2>
        <p>
          En cas de litige, et après avoir tenté de résoudre le différend directement avec notre agence, vous pouvez recourir gratuitement au médiateur de la consommation :
        </p>
        <p><strong>Nom du médiateur :</strong> Medimmoconso</p>
        <p><strong>Adresse :</strong> 1 Rue du Litige, 75000 Paris, France</p>
        <p><strong>Site web :</strong> www.medimmoconso.fr</p>
      </section>

      <section className={s.section}>
        <h2>Directeur de publication</h2>
        <p><strong>Nom :</strong> Jean Dupont, Gérant</p>
      </section>

      <section className={s.section}>
        <h2>Hébergement du site</h2>
        <p><strong>Nom de l’hébergeur :</strong> OVH</p>
        <p><strong>Adresse de l’hébergeur :</strong> 2 Rue Kellermann, 59100 Roubaix, France</p>
        <p><strong>Contact de l’hébergeur :</strong> +33 9 72 10 10 07</p>
      </section>

      <section className={s.section}>
        <h2>Transparence des prix et des services</h2>
        <p><strong>Honoraires de l’agence :</strong> 5 % TTC du montant net vendeur.</p>
      </section>

      <section className={s.section}>
        <h2>Informations relatives aux annonces immobilières</h2>
        <p>
          Conformément à la réglementation en vigueur, toutes les annonces immobilières publiées par notre agence incluent les informations relatives à la performance énergétique (DPE) et aux émissions de gaz à effet de serre.
        </p>
      </section>
    </div>
  );
};

export default LegalNoticePage;
