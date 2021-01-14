export default interface IUser {
  _id:               string;
  email:             string;
  plan:              string;
  isUnder18:         boolean;
  gender:            string;
  openPreferredDate: string;
  _createdOn:        Date;
}
