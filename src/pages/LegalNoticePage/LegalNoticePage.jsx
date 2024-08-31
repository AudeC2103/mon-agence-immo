// ./src/pages/LegalNoticePage/LegalNoticePage.jsx

import React from 'react';
import s from './style.module.scss';
import MainBanner from '../../containers/MainBanner/MainBanner';

const LegalNoticePage = () => {
  return (
    <div className={s.page}>
      <MainBanner categorie="LegalNotice" />
      <div className={s.legalNoticeContainer}>
        <h2>Identité du responsable, coordonnées de l'hébergeur, ainsi que les droits et obligations conformément aux réglementations en vigueur.</h2>

        <section className={s.section}>
          <h3>Identification de l’agence</h3>
          <p><strong>Nom de l'agence :</strong> mon-agence-immo</p>
          <p><strong>Forme juridique :</strong> En cours d'enregistrement</p>
          <p><strong>Adresse du siège social :</strong> 25 rue Honoré Commeurec, 35136 Saint-Jacques-de-le-Lande, France</p>
          <p><strong>Montant du capital social :</strong> 0 €</p>
        </section>

        <section className={s.section}>
          <h3>Informations sur l’inscription au registre</h3>
          <p><strong>Numéro d’inscription au Registre du Commerce et des Sociétés (RCS) :</strong> RCS Rennes 123 456 789</p>
          <p><strong>Numéro de TVA intracommunautaire :</strong> FR12345678901</p>
        </section>

        <section className={s.section}>
          <h3>Coordonnées</h3>
          <p><strong>Numéro de téléphone :</strong> +33 6 52 21 37 98</p>
          <p><strong>Adresse e-mail :</strong> aude.campillo@gmail.com</p>
          <p><strong>Adresse du site web :</strong> www.mon-agence-immo.wouafwouaf.ovh (Changement probable à venir)</p>
        </section>

        <section className={s.section}>
          <h3>Informations professionnelles</h3>
          <p><strong>Carte professionnelle d’agent immobilier :</strong> CPI XXXX XXXX XXXX XXXX XXXX délivrée par la CCI de Rennes (en cours)</p>
          <p><strong>Assurance de responsabilité civile professionnelle :</strong> GOOD Assurances - Couverture géographique : France entière</p>
        </section>

        <section className={s.section}>
          <h3>Mentions relatives à la CNIL</h3>
          <p>
            Le site ne collecte pour l'instant pas les données des utilisateurs. Cette mention sera retirée et adapté lorsque cela sera le cas. Le site collectera des données personnelles pour la gestion des clients. Ces données seront traitées en conformité avec la réglementation applicable, y compris le RGPD.
          </p>
          <p>
            Vous disposerez de droits d’accès, de rectification, de suppression, et d’opposition que vous pourvez exercer en nous contactant par e-mail à l'adresse : dpo@mon-agence-immo.fr (délégué à la protection des données)
          </p>
        </section>

        <section className={s.section}>
          <h3>Médiateur de la consommation</h3>
          <p>
            En cas de litige, et après avoir tenté de résoudre le différend directement avec notre agence, vous pouvez recourir gratuitement au médiateur de la consommation :
          </p>
          <p><strong>Nom du médiateur :</strong> Medimmoconso</p>
          <p><strong>Adresse :</strong> 1 Rue du Litige, 75000 Paris, France</p>
          <p><strong>Site web :</strong> www.medimmoconso.fr</p>
        </section>

        <section className={s.section}>
          <h3>Directeur de publication</h3>
          <p><strong>Nom :</strong> Aude CAMPILLO, Gérante</p>
        </section>

        <section className={s.section}>
          <h3>Hébergement du site</h3>
          <p><strong>Nom de l’hébergeur :</strong> OVH</p>
          <p><strong>Adresse de l’hébergeur :</strong> 2 Rue Kellermann, 59100 Roubaix, France</p>
          <p><strong>Contact de l’hébergeur :</strong> +33 9 72 10 10 07</p>
        </section>

        <section className={s.section}>
          <h3>Transparence des prix et des services</h3>
          <p><strong>Honoraires de l’agence :</strong> 5 % TTC du montant net vendeur.</p>
        </section>

        <section className={s.section}>
          <h3>Informations relatives aux annonces immobilières</h3>
          <p>
            Conformément à la réglementation en vigueur, toutes les annonces immobilières publiées par notre agence incluent les informations relatives à la performance énergétique (DPE) et aux émissions de gaz à effet de serre.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNoticePage;
