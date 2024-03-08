'use client';
import { useState, useCallback } from 'react';
import { Button, List, Avatar, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { TComment } from '@/types';
import { request } from '@/utils/request-client';
import dayjs from 'dayjs';

type Props = {
  comment: TComment;
  onDelete: (commentId: string) => void;
};

export const Comment = ({ comment, onDelete }: Props) => {
  const [loading, setLoading] = useState(false);

  const onDeleteComment = useCallback(
    async (comment: TComment) => {
      setLoading(true);

      await request({
        method: 'DELETE',
        path: `/comments/${comment._id}?secret=${comment.secret}`,
      });

      onDelete(comment._id);
      setLoading(false);
    },
    [request]
  );

  return (
    <List.Item
      key={comment._id}
      actions={[
        <Dropdown
          destroyPopupOnHide
          trigger={['click']}
          placement="bottomRight"
          menu={{
            items: [
              {
                key: '1',
                onClick: () => window.open(comment.pageUrl, '_blank'),
                label: 'Open page',
              },
              {
                key: '2',
                danger: true,
                onClick: () => onDeleteComment(comment),
                label: 'Delete',
              },
            ],
          }}
        >
          <Button type="text" loading={loading} icon={<MoreOutlined />} />
        </Dropdown>,
      ]}
    >
      <List.Item.Meta
        title={comment.author}
        avatar={
          <Avatar
            src={`https://www.gravatar.com/avatar/${comment.gravatar}?d=monsterid`}
          />
        }
        description={
          <>
            <a style={{ fontSize: 12 }} target="_blank" href={comment.pageUrl}>
              {dayjs(comment.createdAt).format('HH:mm - DD MMM YYYY')}
            </a>
            <div>{comment.body}</div>
          </>
        }
      />
    </List.Item>
  );
};
